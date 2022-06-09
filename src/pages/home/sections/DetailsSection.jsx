import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SectionStyle from "./SectionStyle";

const DetailsCardStyle = {
	height: "100%",
	display: "flex",
	flexDirection: "column",
};

const DetailsSection = () => {
	return (
		<section style={SectionStyle}>
			<Typography variant='h4' gutterBottom>
				Our Details
			</Typography>
			<Grid container spacing={4}>
				<Grid item xs={12} md={4}>
					<Card sx={DetailsCardStyle}>
						<CardContent sx={{ flexGrow: 1 }}>
							<Typography gutterBottom variant='h5' component='h2'>
								Proprietor/Headteacher
							</Typography>

							<Typography variant='p' sx={{ fontWeight: "bold" }}>
								Mr Ellis Wells
							</Typography>
							<br />
							<Typography variant='p' sx={{ fontWeight: "bold" }}>
								ewells@wribbenhallschool.co.uk
							</Typography>
							<br />
							<Typography variant='p' sx={{ fontWeight: "bold" }}>
								01299 405383
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={4}>
					<Card sx={DetailsCardStyle}>
						<CardContent sx={{ flexGrow: 1 }}>
							<Typography gutterBottom variant='h5' component='h2'>
								Our Governor
							</Typography>
							<Typography variant='p' sx={{ fontWeight: "bold" }}>
								Mrs Linda Minnock
							</Typography>
							<br />
							<Typography variant='p' sx={{ fontWeight: "bold" }}>
								l.minnock@btinternet.com
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={4}>
					<Card sx={DetailsCardStyle}>
						<CardContent sx={{ flexGrow: 1 }}>
							<Typography gutterBottom variant='h5' component='h2'>
								School Address
							</Typography>
							<Typography variant='p' sx={{ fontWeight: "bold" }}>
								21 Crundalls Lane
							</Typography>
							<br />
							<Typography variant='p' sx={{ fontWeight: "bold" }}>
								Bewdley
							</Typography>
							<br />
							<Typography variant='p' sx={{ fontWeight: "bold" }}>
								Worcestershire
							</Typography>
							<br />
							<Typography variant='p' sx={{ fontWeight: "bold" }}>
								DY12 1JL
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</section>
	);
};

export default DetailsSection;
