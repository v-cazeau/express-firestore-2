import express from 'express'; 
import cors from 'cors'; 

const PORT = 3005;
const app = express(); 

app.use(cors()); 
app.use(express.json()); 

app.listen(PORT, () => {
    console.log(`Listening on http:localhost:${PORT}...`);
}); 
