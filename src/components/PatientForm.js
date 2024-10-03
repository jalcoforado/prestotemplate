import React, { useState } from 'react';
import {
  Box, TextField, Select, MenuItem, Button, Typography, Paper, Grid, Stack, Card, CardContent,
} from '@mui/material';

const PatientForm = () => {
  const [patient, setPatient] = useState({
    name: '', birthDate: '', sex: '', cpf: '', rg: '', phone: '', email: '',
    address: { street: '', number: '', neighborhood: '', city: '', state: '', cep: '' },
    healthInfo: { condition: '', preExistingConditions: '', allergies: '', medications: '', surgeries: '' },
    emergency: { contactName: '', relationship: '', contactPhone: '' },
    healthPlan: '', generalObservations: ''
  });

  const handleChange = (e) => setPatient({ ...patient, [e.target.name]: e.target.value });
  const handleNestedChange = (e, parent) => setPatient({ ...patient, [parent]: { ...patient[parent], [e.target.name]: e.target.value } });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do Paciente:", patient);
  };

  return (
    <Box sx={{ padding: 2, backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      <Paper elevation={4} sx={{ padding: 4, maxWidth: '900px', margin: 'auto' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Ficha cadastral Paciente
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            {/* Informações Pessoais */}
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" gutterBottom>Informações Pessoais</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField label="Nome Completo" name="name" fullWidth value={patient.name} onChange={handleChange} required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField type="date" label="Data de Nascimento" name="birthDate" fullWidth value={patient.birthDate} onChange={handleChange} required InputLabelProps={{ shrink: true }} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Select name="sex" value={patient.sex} onChange={handleChange} fullWidth displayEmpty required>
                      <MenuItem value=""><em>Sexo</em></MenuItem>
                      <MenuItem value="Masculino">Masculino</MenuItem>
                      <MenuItem value="Feminino">Feminino</MenuItem>
                      <MenuItem value="Outro">Outro</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="Telefone" name="phone" fullWidth value={patient.phone} onChange={handleChange} required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="CPF" name="cpf" fullWidth value={patient.cpf} onChange={handleChange} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="E-mail" name="email" fullWidth value={patient.email} onChange={handleChange} required />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Endereço */}
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" gutterBottom>Endereço</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField label="Rua" name="street" fullWidth value={patient.address.street} onChange={(e) => handleNestedChange(e, 'address')} />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField label="Número" name="number" fullWidth value={patient.address.number} onChange={(e) => handleNestedChange(e, 'address')} />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField label="CEP" name="cep" fullWidth value={patient.address.cep} onChange={(e) => handleNestedChange(e, 'address')} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField label="Bairro" name="neighborhood" fullWidth value={patient.address.neighborhood} onChange={(e) => handleNestedChange(e, 'address')} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField label="Cidade" name="city" fullWidth value={patient.address.city} onChange={(e) => handleNestedChange(e, 'address')} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField label="Estado" name="state" fullWidth value={patient.address.state} onChange={(e) => handleNestedChange(e, 'address')} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Botão de Enviar */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
              <Button type="submit" variant="contained" color="primary" size="large">
                Enviar Cadastro
              </Button>
            </Box>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default PatientForm;
