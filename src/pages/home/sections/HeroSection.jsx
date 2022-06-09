import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const HeroSection = () => {
	return (
		<section>
			<Box
				sx={{
					pt: 8,
					pb: 6,
				}}
			>
				<Container maxWidth='sm'>
					<img
						src={require("../../../images/school_logo.jpeg")}
						alt='logo'
						style={{
							width: "125px",
							height: "125px",
							borderRadius: "20px",
							display: "block",
							margin: "0 auto",
							marginBottom: "20px",
						}}
					/>
					<Typography
						variant='h4'
						align='center'
						sx={{ fontWeight: "light" }}
						gutterBottom
					>
						Wribbenhall School
					</Typography>

					<Typography
						variant='h5'
						sx={{ fontWeight: "light" }}
						align='center'
						color='text.secondary'
						paragraph
					>
						We are a Select, home-based Specialist Primary School, supporting
						children with Social, Emotional and Mental Health conditions to
						access education and therapy through de-escalating school-based
						anxiety.
					</Typography>
					<Stack
						sx={{ pt: 4 }}
						direction='row'
						spacing={4}
						justifyContent='center'
					>
						<img
							src={require("../../../images/thrive_logo.jpg")}
							alt=''
							style={{
								width: "100px",
								borderRadius: "20px",
								marginBottom: "10px",
							}}
						/>{" "}
						<img
							src={require("../../../images/ofsted_logo.jpeg")}
							alt=''
							style={{
								width: "100px",
								borderRadius: "20px",
								marginBottom: "10px",
							}}
						/>
					</Stack>
				</Container>
			</Box>
		</section>
	);
};

export default HeroSection;
