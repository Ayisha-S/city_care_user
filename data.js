// ================================
// SHARED DATA - data.js
// ================================
// Single localStorage key used by ALL pages: "queueData"

const DEFAULT_DOCTORS = [
    { id: 1, name: "Dr. Aisha Sharma",    department: "Cardiology",    avgTime: 10, patientsToday: 8,  lastToken: 8  },
    { id: 2, name: "Dr. Ravi Menon",      department: "Neurology",     avgTime: 15, patientsToday: 5,  lastToken: 5  },
    { id: 3, name: "Dr. Priya Nair",      department: "Orthopedics",   avgTime: 12, patientsToday: 10, lastToken: 10 },
    { id: 4, name: "Dr. Sameer Khan",     department: "Pediatrics",    avgTime: 8,  patientsToday: 6,  lastToken: 6  },
    { id: 5, name: "Dr. Lakshmi Iyer",   department: "Dermatology",   avgTime: 7,  patientsToday: 3,  lastToken: 3  }
];

// Load from localStorage or fall back to defaults
let saved = localStorage.getItem("queueData");
let doctors = saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(DEFAULT_DOCTORS));

function saveDoctors() {
    localStorage.setItem("queueData", JSON.stringify(doctors));
}