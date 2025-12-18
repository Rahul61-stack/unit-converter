# Unit Converter

A full-stack web application for converting various units of measurement including length, weight, and temperature. Built with React (Vite) frontend and Node.js/Express backend.

## Features

- **Length Conversion**: millimeter, centimeter, meter, kilometer, inch, foot, yard, mile
- **Weight Conversion**: milligram, gram, kilogram, ounce, pound
- **Temperature Conversion**: Celsius, Fahrenheit, Kelvin
- Real-time conversion calculations
- Clean and intuitive user interface
- Responsive design for mobile and desktop

## Tech Stack

**Frontend:**

- React 19 (Vite)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components
- Axios for API calls
- Lucide React icons

**Backend:**

- Node.js
- Express.js

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn

## Installation

### Clone the repository

```bash
git clone https://github.com/your-username/unit-converter.git
cd unit-converter
```

### Backend Setup

```bash
cd backend
npm install
```

Start the backend server:

```bash
npm run dev
```

The backend server will run at `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
npm install
```

If using shadcn/ui components, they should already be configured. If you need to add new components:

```bash
npx shadcn@latest add [component-name]
```

Start the frontend development server:

```bash
npm run dev
```

The frontend will run at `http://localhost:5173`

## Usage

1. Open your browser and navigate to `http://localhost:5173`
2. Select the type of conversion (Length, Weight, or Temperature)
3. Choose the unit you're converting from
4. Choose the unit you're converting to
5. Enter the value to convert
6. The converted result will be displayed instantly

## Project Structure

```
unit-converter/
├── frontend/              # React (Vite) frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── services/      # Service functions
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── public/
│   └── package.json
├── backend/               # Node.js + Express backend
│   ├── server.js          # Server entry point
│   ├── helper.js          # Helper fucntions
│   └── package.json
└── README.md
```

## API Documentation

### Conversion Endpoint

**POST** `/api/convert`

Converts a value from one unit to another.

**Request Body:**

```json
{
  "value": 100,
  "conversionFrom": "Centimeter",
  "conversionTo": "Meter"
}
```

**Response:**

```json
{
  "result": 1
}
```

## Supported Units

### Length

- Millimeter (mm)
- Centimeter (cm)
- Meter (m)
- Kilometer (km)
- Inch (in)
- Foot (ft)
- Yard (yd)
- Mile (mi)

### Weight

- Milligram (mg)
- Gram (g)
- Kilogram (kg)
- Ounce (oz)
- Pound (lb)

### Temperature

- Celsius (°C)
- Fahrenheit (°F)
- Kelvin (K)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - [rahulsrivastav400@gmail.com](mailto:rahulsrivastav400@gmail.com)

Project Link: [https://github.com/Rahul61-stack/unit-converter](https://github.com/Rahul61-stack/unit-converter)

Roadmap link : [https://roadmap.sh/projects/unit-converter](https://roadmap.sh/projects/unit-converter)
