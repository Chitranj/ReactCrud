import './App.css';
import Header from './Components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='form'>
        <Stack spacing={2} direction="row">
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <Button variant="contained" color='error'><AddIcon /></Button>
        </Stack>
      </div>
    </div>
  );
}

export default App;
