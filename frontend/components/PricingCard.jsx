import {
  BlockStack,
  Card,
  Text,
  InlineStack,
  Box,
  Button,
  Badge,
  ButtonGroup
} from "@shopify/polaris";

export const PricingCard = ({
  title,
  description,
  price,
  features,
  featuredText,
  button,
  frequency
}) => {
  return (
    <div
      className="relative w-[18rem] rounded-xl z-0"
      style={{
        boxShadow: featuredText ? "0px 0px 15px 4px #CDFEE1" : "",
      }}
    >
      {featuredText ? (
        <div className="absolute -top-4 z-50">
          <Badge size="large" tone="success">
            {featuredText}
          </Badge>
        </div>
      ) : null}
      <Card>
        <BlockStack gap="400">
          <BlockStack gap="200" align="start">
            <Text as="h3" variant="headingLg">
              {title}
            </Text>
            {description ? (
              <Text as="p" variant="bodySm" tone="subdued">
                {description}
              </Text>
            ) : null}
          </BlockStack>

          <InlineStack blockAlign="end" gap="100" align="start">
            <Text as="h2" variant="heading2xl">
              {price}
            </Text>
            <Box paddingBlockEnd="200">
              <Text variant="bodySm">/ {frequency}</Text>
            </Box>
          </InlineStack>

          <BlockStack gap="100">
            {features?.map((feature, id) => (
              <Text tone="subdued" as="p" variant="bodyMd" key={id}>
                {feature}
              </Text>
            ))}
          </BlockStack>

          <Box paddingBlockStart="200" paddingBlockEnd="200">
            <ButtonGroup fullWidth>
              <Button {...button.props}>{button.content}</Button>
            </ButtonGroup>
          </Box>
        </BlockStack>
      </Card>
    </div>
  );
};
