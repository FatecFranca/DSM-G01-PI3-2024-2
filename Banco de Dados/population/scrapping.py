def webscrapping_linkedin():
    import requests
    from bs4 import BeautifulSoup
    import pandas as pd

    url = 'https://www.linkedin.com/jobs/search?keywords=desenvolvedor&location=Brazil&f_WT=2&origin=JOBS_HOME_SEARCH_BUTTON&refresh=true'
    response = requests.get(url)

    jobs = []

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        job_listings = soup.find_all('div', {'class': 'job-search-card'})
        
        for job in job_listings:
            title = job.find('h3', {'class': 'base-search-card__title'}).text.strip()
            company = job.find('a', {'class': 'hidden-nested-link'}).text.strip()
            location = job.find('span', {'class': 'job-search-card__location'}).text.strip()
            anchor_tag = job.find('a', class_='base-card__full-link')
            href_link = anchor_tag['href']
            
            job_response = requests.get(href_link)
            if job_response.status_code == 200:
                job_soup = BeautifulSoup(job_response.text, 'html.parser')
                job_description = job_soup.find('div', {'class': 'show-more-less-html__markup'}).text.strip()
            else:
                job_description = 'Descrição não disponível.'
                
            jobs.append({
                'titulo': title,
                'localizacao': location,
                'empresa': company,
                'link': href_link,
                'descricao': job_description
            })

            print(f'Job {title} added!')
    else:
        print('Failed to fetch job listings.')
        
    df_jobs = pd.DataFrame(jobs)
    return df_jobs

