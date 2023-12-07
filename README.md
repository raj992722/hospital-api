
# Hospital API

## Setup
1. Install dependencies: `npm install`
2. Set up your environment variables in a `.env` file based on `.env.example`
3. Start the server: `npm start`

## API Endpoints

### Doctors
- POST /doctors/register
- POST /doctors/login

### Patients
- POST /patients/register
- POST /patients/:id/create_report
- GET /patients/:id/all_reports

### Reports
- GET /reports/:status
