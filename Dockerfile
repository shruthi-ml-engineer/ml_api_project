FROM python:3.10-slim

# Install locales, pip, and set up proper locale configuration
RUN apt-get update && apt-get install -y locales python3-pip && rm -rf /var/lib/apt/lists/*
RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LC_ALL en_US.UTF-8

WORKDIR /app
COPY . .

RUN python -m pip install --upgrade pip
RUN python -m pip install -r requirements.txt

EXPOSE 8000
CMD ["python", "main.py"]