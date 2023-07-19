import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '300px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  arrowButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    zIndex: 1,
    padding: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  leftArrowButton: {
    left: theme.spacing(2),
  },
  rightArrowButton: {
    right: theme.spacing(2),
  },
}));

const ImageSlider = ({ images }) => {
  const classes = useStyles();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={classes.root}>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className={classes.image}
      />
      <IconButton
        className={`${classes.arrowButton} ${classes.leftArrowButton}`}
        onClick={handlePrevClick}
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        className={`${classes.arrowButton} ${classes.rightArrowButton}`}
        onClick={handleNextClick}
      >
        <KeyboardArrowRight />
      </IconButton>
    </div>
  );
};

export default ImageSlider;
