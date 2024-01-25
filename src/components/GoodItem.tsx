import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  SxProps,
  Typography,
} from '@mui/material';

const GoodItem = (props: any) => {
  const { title, price } = props;

  const BoxStyles: SxProps = {
    position: 'absolute',
    left: '5px',
    top: '0px',
    zIndex: '5',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '17px',
    fontWeight: 'bold',
    backgroundColor: '#000000',
    ':before': {
      content: '"New"',
    },
  };

  return (
    <Grid xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ height: '100%', position: 'relative' }}>
        {/*<Box sx={{ ...BoxStyles }} />*/}
        <CardMedia
          // image="https://www.gurt-smak.zp.ua/wp-content/uploads/2022/07/yzobrazhenye_2022-07-27_202748399.png"
          image="https://www.gurt-smak.zp.ua/wp-content/uploads/2022/07/yzobrazhenye_2022-07-27_202748399-300x156.png"
          component="img"
          alt={title}
          title={title}
          sx={{ height: 140 }}
        />
        <CardContent>
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
          <Typography variant="body1">Цена: {price}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained">Купить</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GoodItem;
