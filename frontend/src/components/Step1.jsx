import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';

const Step1 = () => {
    const [mobile, setMobile] = useState("");
    const navigate = useNavigate();

    const handleNext = () => {
        localStorage.setItem("mobile", mobile); // Store temporarily
        navigate("/step2");
    };

    return (
        <div>
            <Typography gutterBottom variant="h3" align="center">React-App</Typography>
            <Card style={{ maxWidth: 450, margin: '0 auto', padding: '20px 5px' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5">Contact us</Typography>
                    <Typography gutterBottom color="textSecondary" variant="body2" component='p'>Fill up the form and our team will get back to you within 24 hours</Typography>
                    <form>
                        <Grid container spacing={1}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField label='first name' placeholder="enter first name" fullWidth required />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField label='last name' placeholder="enter last name" fullWidth required />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField type="email" label='email' placeholder="enter email" fullWidth required />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField type="number" label='phone' placeholder="enter phone number" fullWidth required />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField label='Message' placeholder="enter your message here" multiline rows={4} fullWidth required />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>















            {/* <FormControl>
                <h2>Are you from Aurangabad?</h2>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />

                </RadioGroup>
            </FormControl>

            <h2>Enter Your Mobile Number</h2>
            <input
                type="text"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
            />
            <button onClick={handleNext}>Next</button> */}
        </div >
    );
};

export default Step1;
