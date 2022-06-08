import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Container";

import Typography from "@mui/material/Typography";

const Calendar = () => {
	return (
		<main>
			<Container>
				<Box sx={{ mt: 4 }} />
				<Typography variant='h4'>Our Calendar</Typography>

				<Grid
					container
					alignItems='center'
					justifyContent='center'
					sx={{ py: 4 }}
				>
					<Grid item xs={12} sm={10}>
						<iframe
							title='calendar'
							src='https://calendar.google.com/calendar/embed?src=wribbenhallschool%40gmail.com&ctz=Europe%2FLondon'
							width='100%'
							height='500px'
							frameBorder='0'
						/>
					</Grid>
				</Grid>
			</Container>
		</main>
	);
};

export default Calendar;
