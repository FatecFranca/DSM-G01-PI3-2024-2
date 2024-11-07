import pandas as pd 
from pandas import DataFrame

def create_type(jobs_dataset: DataFrame) -> DataFrame:
    jobs_dataset['tipo'] = jobs_dataset['titulo'].apply(
        lambda x: 'Back-end' if 'backend' in x.lower() 
        else 'Front-end' if 'front' in x.lower() 
        else 'Outros'
    )
    
    print("Editado!")
    
    return jobs_dataset

