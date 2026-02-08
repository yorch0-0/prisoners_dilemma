# Use an official Python runtime as a parent image
FROM python:3.10-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file from the server subdirectory
COPY server/requirements.txt ./

# Install packages
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire server folder content to the container's app folder
COPY server/ ./

# Set the Python path
ENV PYTHONPATH=/app

# Make port available
EXPOSE 5000

# Run the application (assuming __init__.py is inside app/)
CMD ["python", "app/__init__.py"]
