<script lang="ts" setup>
import { ref } from 'vue';
import { VCardSubtitle, VLabel, VTextField } from 'vuetify/components';
import { useNotificationMethodStore } from '../stores/notificationMethodStore';
import { SaveNoticiationMethodRequest, eNoticationMethodType } from '../stores/typed.d';

const email = ref('')
const notificationMethodStore = useNotificationMethodStore()

const onSubmit = () => {
  const request : SaveNoticiationMethodRequest = {
    email: email.value,
    method: eNoticationMethodType.email
  }
  notificationMethodStore.save(request)
}
</script>
<template>
  <VCard width="550" class="pa-4">
    <VCardSubtitle class="text-h5 text-center py-5">알림받으실 이메일을 등록해주세요!</VCardSubtitle>
    <VForm @submit.prevent="onSubmit" class="py-2">
      <VCardItem>
        <VLabel>이메일</VLabel>
        <VTextField placeholder="이메일" v-model="email"></VTextField>

        <div class="py-4">
          <VBtn type="submit" variant="tonal" color="primary" width="100%">등록</VBtn>
        </div>
      </VCardItem>


    </VForm>
  </VCard>

</template>
