import {
  Box,
  Button,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FavoriteIcon, MoreIcon } from "../assets/icons";
import styled from "@emotion/styled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { getProducts, setFourProduct } from "../features/index";
import { useDispatch, useSelector } from "react-redux";

const StyledIconButton = styled(IconButton)({
  height: "24px",
  width: "24px",
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: "#fff",
  },
});
const StyledPriceDiv = styled(Box)({
  padding: "4px 8px",
  background: "#E6EEF8",
});
const StyledProductNameDiv = styled(Box)({
  padding: "4px 8px",
});
const StyledMoreButton = styled(Button)({
  backgroundColor: "#0059BC",
  textTransform: "inherit",
  padding: "16px 32px",
});
const StyledLikedButton = styled(Button)({
  backgroundColor: "#0059BC",
  textTransform: "inherit",
  padding: "4px 8px",
});
const StyledHeaderTypo = styled(Typography)({
  "@media (max-width: 1024px)": {
    fontSize: "24px",
  },
  "@media (max-width: 640px)": {
    fontSize: "16px",
  },
  "@media (min-width: 1024px)": {
    fontSize: "32px",
  },
});
const Content = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.reducer.products);
  const fourProducts = useSelector((state) => state.reducer.firstFourProduct);
  const [likeCount, setLikeCount] = useState(0);
  const [showMore, setShowMore] = useState(4);
  const [loaded, setLoaded] = useState(false);
  const [firstloaded, setFirstLoaded] = useState(false);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    products && setLoaded(true);
    products && dispatch(setFourProduct(products.slice(0, 4)));
    fourProducts && setFirstLoaded(true);
  }, [products]);
  const handleShowMore = () => {
    dispatch(setFourProduct(products.slice(0, showMore + 4)));
    setShowMore(showMore + 4);
  };
  return (
    <Box className="sm:px-16 lg:px-32 p-4 flex flex-col my-10">
      <div className="flex justify-between">
        <StyledHeaderTypo fontSize={32} fontWeight={500}>
          Content title goes here
        </StyledHeaderTypo>
        <div className="flex items-center gap-2">
          <FavoriteIcon />
          <Typography fontSize={16} fontWeight={500}>
            {likeCount} ÜRÜN
          </Typography>
          <StyledLikedButton variant="contained" color="primary">
            Beğenilenler
          </StyledLikedButton>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-10">
        {loaded &&
          firstloaded &&
          fourProducts.map((item) => (
            <div id={item.id} key={item.id} className="flex relative w-full">
              <CardContent className="border rounded">
                <CardMedia component="img" image={item.imageUrl}></CardMedia>
                <StyledIconButton
                  sx={{
                    position: "absolute",
                    top: 21,
                    right: 21,
                    zIndex: 1,
                  }}
                >
                  <FavoriteBorderIcon
                    fontSize="small"
                    sx={{ color: "#D1D1D1" }}
                    onClick={() => setLikeCount(likeCount + 1)}
                  />
                </StyledIconButton>
                <StyledProductNameDiv>
                  <Typography fontSize={16} fontWeight={600}>
                    {item.name}
                  </Typography>
                </StyledProductNameDiv>
                <StyledPriceDiv>
                  <Typography fontSize={14} fontWeight={700}>
                    {item.price} TL
                  </Typography>
                </StyledPriceDiv>
                <StyledProductNameDiv>
                  <Typography fontSize={12} fontWeight={500}>
                    {item.description}
                  </Typography>
                </StyledProductNameDiv>
                <StyledProductNameDiv>
                  <Typography fontSize={10} fontFamily="Inter" fontWeight={400}>
                    {item.shippingMethod}
                  </Typography>
                </StyledProductNameDiv>
              </CardContent>
            </div>
          ))}
      </div>
      <div className="flex justify-center my-10">
        {loaded && products.length > showMore && (
          <StyledMoreButton
            variant="contained"
            color="primary"
            endIcon={<MoreIcon>send</MoreIcon>}
            onClick={() => handleShowMore()}
          >
            Daha fazla
          </StyledMoreButton>
        )}
      </div>
    </Box>
  );
};

export default Content;
