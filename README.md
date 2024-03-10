# Personal Website
This repository serves as the source code for my personal website, showcasing my resume.
The website is designed to provide an overview of my skills, experience, and projects.
It includes a Docker setup for easy deployment and management.
## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Jaldsky/SelfPresentationPage.git

2. Add the SSL certificates to the project:
 - Place ryzhenkov_ssl.crt with the primary certificate.
 - Include ryzhenkov_ssl_ca.crt with the Root Certificate and Intermediate Certificate.
 - Add ryzhenkov_ssl.key with the private key.

3. Build the Docker image:
   ```bash
   docker build -f image.Dockerfile -t page .
   
4. Run the Docker container:
   ```bash
   docker run -d -p 80:80 -p 443:443 page

- The application is running on ports 80 and 443.

# License
Copyright (c) 2024 Ryzhenkov Artem