import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const AboutSection = () => {
	return (
		<section>
			<Typography variant='h4' gutterBottom>
				About Us
			</Typography>
			<Grid container spacing={4}>
				<Grid item sm={12} md={6}>
					<Card
						sx={{
							height: "100%",
							display: "flex",
							flexDirection: "column",
						}}
					>
						<CardContent sx={{ flexGrow: 1 }}>
							<Typography gutterBottom variant='h5' component='h2'>
								What kinds of SEN do we provide for?
							</Typography>
							<Typography variant='p'>
								We are committed to ensuring that all pupils achieve their
								potential, personally, socially, emotionally and
								academically across all areas of the curriculum,
								regardless of their gender, ethnicity, social background
								or religion.
							</Typography>
							<Typography variant='p'>
								<ul>
									<li>
										<a
											href='https://www.wisherefordshire.org/marketplace/cat/vendor/1776'
											target='_blank'
											rel='noreferrer'
											style={{ color: "inherit" }}
										>
											Herefordshire County Council
										</a>
									</li>
									<li>
										<a
											href='https://www.staffordshireconnects.info/kb5/staffordshire/directory/service.page?id=k_BV9WkXsp8&localofferchannel=0'
											target='_blank'
											rel='noreferrer'
											style={{ color: "inherit" }}
										>
											Staffordshire County Council
										</a>
									</li>
									<li>
										<a
											href='https://raw.githubusercontent.com/EllisCWells/WribbenhallFiles/master/Local%20Offer%20Worestershire.docx'
											target='_blank'
											rel='noreferrer'
											style={{ color: "inherit" }}
										>
											Worcestershire Children First
										</a>
									</li>
								</ul>
							</Typography>
						</CardContent>
						<CardActions>
							<Button size='small'>Contact Us</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item sm={12} md={6}>
					<Card
						sx={{
							height: "100%",
							display: "flex",
							flexDirection: "column",
						}}
					>
						<CardContent sx={{ flexGrow: 1 }}>
							<Typography gutterBottom variant='h5' component='h2'>
								Pupil Profile
							</Typography>
							<Typography variant='p' paragraph>
								We provide Specialist Education for SEMH children aged
								5-11 years, who are too anxious to attend schools and
								other establishments.
							</Typography>
							<Typography variant='p' paragraph>
								Our Key Pupil Profile states the main issues that we are
								able to/not able to provide for. Each child’s application
								will be considered, by the proprietor, on an individual
								basis, taking into consideration the attributes of the
								current pupils.
							</Typography>
						</CardContent>
						<CardActions>
							<Button size='small'>Contact Us</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</section>
	);
};

export default AboutSection;
