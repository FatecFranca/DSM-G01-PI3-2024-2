import data_process as dp
import connect_database as cd
import scrapping as sc

def main():
    DATABASE = cd.MongoDatabase('tecjobs', 'Oportunidade')
    
    jobs_dataset = sc.webscrapping_linkedin()
    jobs_dataset_refined = dp.create_type(jobs_dataset)
    
    DATABASE.write(jobs_dataset_refined)
    
if __name__ == '__main__':
    main()
    
    
    
