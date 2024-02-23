import { Button, Text, InlineStack } from '@shopify/polaris'

export default function Hero() {
  return (
    <section className="my-48 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-72 text-center">
      <Text variant='heading3xl' as='h1'>
        <span className="block text-xl sm:text-3xl md:text-4xl">Shopify + React.js + Tailwind</span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-4xl sm:text-6xl md:text-7xl">
          Revenue Challenge
        </span>
      </Text>
      <Text variant='headingMd' as='h2'>
        Powered by Felipe Ossandon
      </Text>
      <InlineStack gap={400} align='center'>
        <div className='flex py-4 gap-x-4'>
          <Button variant="primary" external url='https://github.com/felipetodev/playing-shopify'>
            Init Repo
          </Button>
          <Button variant="primary" external url='https://help.shopify.com/en/partners/dashboard/managing-stores/development-stores#create-a-development-store'>
            Learn more
          </Button>
        </div>
      </InlineStack>
    </section>
  )
}
