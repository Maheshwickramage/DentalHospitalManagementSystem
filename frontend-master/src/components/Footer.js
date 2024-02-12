import * as React from 'react'
import {Typography,Link,Container,Grid} from "@mui/material"



const Footer = () => {


    const footers = [
        {
          title: 'Hospital',
          description: ['Team', 'History', 'Contact us', 'Locations'],
        },
        {
          title: 'Features',
          description: [
            'Cool stuff',
            'Team feature',
            'Developer stuff',
            
          ],
        },
        {
          title: 'Resources',
          description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
        },
        {
          title: 'Legal',
          description: ['Privacy policy', 'Terms of use'],
        },
      ];


  return (
    <>
        <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
   
      </Container>
    </>
  )
}

export default Footer
