import { Box, Button, Grid, Typography, Link, Snackbar } from '@material-ui/core'
import StarRatings from 'react-star-ratings';
import { Card, } from 'react-bootstrap'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../../redux';

function ProductCard(props) {

  const [open, setopen] = useState(false)


  // IT destructures the props from parent element
  const { product_name, product_cost, product_rating, product_image, product_id } = props.product
  // console.log(props.product.product_id)

  const dispatch = useDispatch()
const addcart = useSelector(state => state.addcart)
// console.log(addcart)


  const handleAddtoCart = () => {
    dispatch(addtocart(props.product))
    setopen(true)
  }

  const handleClose = ()=>{
    setopen(false)
  }

  return (
    <React.Fragment>
      <Card style={{ width: '16rem', height: '20rem', borderBottom: '2px solid lightgray', borderTop: 0 }}>
        <Card.Body>
          <img alt='Product' src={`http://180.149.241.208:3022/${product_image}`} style={{ height: '8rem', width: '100%' }} />
          <Typography align='center' style={{ height: '3em' }} className='pt-2'>
            <Link href={`/productdetail/${product_id}`}>{product_name}</Link>
          </Typography>
          <Card.Text style={{ display: 'flex', justifyContent: "center" }} >
            <b style={{ fontFamily: 'Arial' }}>{`₹${product_cost}`}</b>
          </Card.Text>
          <Grid container justify='center'>
            <Box width='75%'>
              <Button onClick={handleAddtoCart} style={{ outline: 'none', backgroundColor: '#f44336', color: 'white' }} fullWidth variant="contained">Add to Cart</Button>
            </Box>
          </Grid>
          <Grid container justify='center'>
            <StarRatings rating={parseFloat(product_rating)} numberOfStars={5} starRatedColor='orange' starDimension='18px' starSpacing='1px' />
          </Grid>
        </Card.Body>
      </Card>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} message='Added Successfully' />
    </React.Fragment>
  )
}

export default ProductCard
