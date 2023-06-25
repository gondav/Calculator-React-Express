import app from './app';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log('Server started on port ' + PORT));
