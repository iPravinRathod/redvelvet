import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid2';
import { Home } from "@mui/icons-material";
import CakeIcon from '@mui/icons-material/Cake';
import PersonIcon from '@mui/icons-material/Person';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HailIcon from '@mui/icons-material/Hail';

const Step2 = () => {
    const [familyDetails, setFamilyDetails] = useState("");
    const navigate = useNavigate();

    const handleNext = () => {
        localStorage.setItem("familyDetails", familyDetails);
        navigate("/review");
    };

    return (
        <div>
            {/* <h2>Enter Family Details</h2> */}
            <Card style={{ maxWidth: 450, margin: '0 auto', padding: '20px 5px' }}>
                <CardContent>
                    {/* <Typography gutterBottom variant="h5">Contact us</Typography>
                    <Typography gutterBottom color="textSecondary" variant="body2" component='p'>Fill up the form and our team will get back to you within 24 hours</Typography> */}
                    <form>
                        <Grid container spacing={1}>
                            <Grid size={{ xs: 12 }} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <PersonIcon fontSize="large" color="primary" />
                                <TextField placeholder="First Name Last Name" fullWidth required />
                            </Grid>
                            <Grid size={{ xs: 12 }} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <CakeIcon fontSize="large" color="primary" />

                                <TextField placeholder="Date of birth" fullWidth required />
                            </Grid>
                            <Grid size={{ xs: 12 }} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <SupervisorAccountIcon fontSize="large" color="primary" />
                                <TextField placeholder="Date of Anniversary" fullWidth required />
                            </Grid>
                            <Grid size={{ xs: 12 }} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <HailIcon fontSize="large" color="primary" />
                                <TextField placeholder="Occupation" fullWidth required />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <Button type="submit" variant="contained" color="primary" fullWidth>Next</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>

        </div>
    );
};

export default Step2;
