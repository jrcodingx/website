// src/api.ts (atau file API Anda)
import axios from 'axios';
// Hapus semua import terkait simulasi DB (misalnya localStorage, initialDb, DbUser, dll.)

// --- GANTI DENGAN IP VPS ANDA ---
// Semua panggilan API akan menuju ke jalur ini, yang akan diteruskan Nginx ke Express
const API_BASE_URL = 'http://128.199.214.234/api';
