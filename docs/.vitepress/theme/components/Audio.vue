<script lang="ts" setup>
const props = defineProps<{
  channelId?: string
  messageId: string
}>()
const channelId = props.channelId ?? 'vitiblog'
const messageId = props.messageId
</script>

<template>
  <ClientOnly>
    <iframe
      width="100%"
      :src="`data:text/html,%3Cbody%3E%3Cscript%20async%3D%22%22%20src%3D%22https%3A%2F%2Ftelegram.org%2Fjs%2Ftelegram-widget.js%3F18%22%20data-telegram-post%3D%22${channelId}%2F${messageId}%22%20data-width%3D%22100%25%22%3E%3C%2Fscript%3E%3C%2Fbody%3E`"
      frameborder="0"
    ></iframe>
  </ClientOnly>
</template>
