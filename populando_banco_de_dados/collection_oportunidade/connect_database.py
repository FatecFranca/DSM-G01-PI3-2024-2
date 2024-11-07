from pymongo import MongoClient
import os
import json
import pandas as pd
from dotenv import load_dotenv

# Carregar variáveis do .env
load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")

class MongoDatabase:
    def __init__(self, name: str, collection: str, url=DATABASE_URL):
        self.database_url = url
        self.database_name = name
        self.database_collection = collection

    def read(self, query: dict) -> str:
        """
        Lê documentos do MongoDB com base em uma consulta e retorna os resultados como JSON.
        
        :param query: Consulta em formato de dicionário.
        :return: Dados em formato JSON.
        """
        try:
            client = MongoClient(self.database_url)
            database = client[self.database_name]
            collection = database[self.database_collection]
            
            documents = collection.find(query)
            data = [doc for doc in documents]
            json_data = json.dumps(data, default=str)
            
            return json_data
        
        except Exception as e:
            print(f"Erro ao se conectar ao database: {e}")
            return json.dumps([])  # Retorna uma lista vazia como JSON em caso de erro

    def write(self, dataframe: pd.DataFrame) -> None:
        """
        Insere um DataFrame no MongoDB.
        
        :param dataframe: DataFrame a ser inserido.
        """
        try:
            client = MongoClient(self.database_url)
            database = client[self.database_name]
            collection = database[self.database_collection]
            
            dict_dataframe = dataframe.to_dict("records")
            collection.insert_many(dict_dataframe)
            
            print("Dados inseridos com sucesso!")

        except Exception as e:
            print(f"Erro ao inserir dados no database: {e}")
