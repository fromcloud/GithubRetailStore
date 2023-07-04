import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Rating, Text } from "@aws-amplify/ui-react";

export default function ProductMedium(props) {
  const { product, overrides, ...rest } = props;
  const imageOnClick = useNavigateAction({
    type: "url",
    url: `${"/product/"}${product?.id}`,
  });
  const titleOnClick = useNavigateAction({
    type: "url",
    url: `${"/product/"}${product?.id}`,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="320px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ProductMedium")}
    >
      <Image
        width="320px"
        height="256px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={product?.image}
        className="clickable"
        onClick={() => {
          imageOnClick();
        }}
        {...getOverrideProps(overrides, "Image")}
      ></Image>
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "content")}
      >
        <Text
          fontFamily="Open Sans"
          fontSize="22px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.07px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          className="clickable"
          children={product?.name}
          onClick={() => {
            titleOnClick();
          }}
          {...getOverrideProps(overrides, "Title")}
        ></Text>
        <Rating
          width="287px"
          height="unset"
          shrink="0"
          size="default"
          value={product?.rating}
          maxValue="5"
          {...getOverrideProps(overrides, "Rating")}
        ></Rating>
        <Text
          fontFamily="Open Sans"
          fontSize="28px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.13px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"$"}${product?.price}`}
          {...getOverrideProps(overrides, "$99")}
        ></Text>
        <Button
          width="288px"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Add to Cart"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
