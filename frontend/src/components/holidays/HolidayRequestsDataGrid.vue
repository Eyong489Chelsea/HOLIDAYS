<template>
  <div class="shadow">
    <DataGrid
      :isLoading="isLoading ||loading"
      :columnHeaders="headers"
      :rows="holidayRequestRows"
      total-element-title="Holiday Requests Total"
    >
      <template v-slot="{ row }">
        <tr
          :data-test="`line-${row.getId()}`"
          class="border-t hover:border-t-transparent hover:bg-blue-100/50 cursor-pointer text-gray-500"
        >
          <td v-for="(header, key) in headers" :key="key" class="px-4">
            <div v-if="header.key === 'employee'" class="flex items-center w-[15rem] py-3">
              <AccountIcon class="mr-4 w-10 h-10" />
              <div class="hover:text-blue-primary">
                 <p class="font-semibold block  hover:text-blue-primary text-black truncate text-sm text-gray-500">{{ row.getTextFor(header.key) }}</p>
              </div>
            </div>
            <span v-else-if="header.key === 'status'">
              <HolidayStatus :value="row.getTextFor(header.key)" />
            </span>
            <span v-else-if="header.key === 'numberOfDays' || header.key === 'type'" class=" font-semibold">
              {{ row.getTextFor(header.key) }}
            </span>
            <span v-else-if="header.key === 'action'" class="w-full justify-center flex font-semibold">
              <MenuWrapper>
                <template #icon>
                  <button class="p-2 rounded-full hover:bg-white">
                    <OptionsIcon class="h-6 w-6 stroke-2"/>
                  </button>
                </template>
                <template #items>
                  <ul class="w-[12rem] bg-white shadow-lg border border-gray-100/70 rounded-lg">
                    <MenuItem
                        v-for="option in options"
                        :key="option.label"
                        v-bind="option"
                        @click.stop="handelClick[option.key](row.getId())"
                    />
                  </ul>
                </template>
              </MenuWrapper>
            </span>
            <span v-else class="overflow-hidden truncate">
              {{ row.getTextFor(header.key) }}
            </span>
          </td>
        </tr>
      </template>
    </DataGrid>
  </div>
  <HolidayDetails
    @close="toggleDetailsModalModal"
    @request="$emit('loader')"
    :holidayId="activeHolidayRequestId"
    v-if="shouldDisplayDetailsModal"
  />
</template>
<script lang="ts" setup>
import { PropType, computed, ref } from "vue";
import { HolidayRequest } from "@/domain/HolidayRequest";
import HolidayStatus from "@/components/StatusBage.vue";
import HolidayDetails from "@/components/modals/HolidayDetails.vue";
import {
  holidayRequestsDataGridColumnHeaders as headers,
  HolidayRequestDataGridRow,
} from "@/utils/holiday-request";
import DataGrid from "../DataGrid.vue";
import { DataGridRow } from "@/utils/type";
import AccountIcon from "@/components/icons/AccountIcon.vue";
import OptionsIcon from "@/components/icons/OptionsIcon.vue";
import MenuWrapper from "@/components/MenuWrapper.vue";
import EyeIcon from "@/components/icons/EyeIcon.vue";
import CheckCircleIcon from "@/components/icons/CheckCircleIcon.vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";
import MenuItem from "@/components/MenuItem.vue";
import {useHolidayRequestStore} from "@/store/holidayRequest";

const options = [
  {
    label: 'View details',
    key:"view_details",
    icon: EyeIcon,
  },
  {
    label: 'Approve',
    key:"approve",
    icon: CheckCircleIcon,
  },
  {
    label: 'Reject',
    key:"reject",
    icon: CloseIcon,
  }
]
const props = defineProps({
  holidayRequests: {
    type: Array as PropType<Array<HolidayRequest>>,
    required: true,
  },
  isLoading: {
    type: Boolean,
  },
});
const emits = defineEmits<{
  (event: "loader"): void;
}>();
const shouldDisplayDetailsModal = ref<boolean>(false);
const loading= ref<boolean>(false);
const activeHolidayRequestId = ref<string>("");

const toggleDetailsModalModal = () => {
  shouldDisplayDetailsModal.value = !shouldDisplayDetailsModal.value;
};

const showDetails = (id: string): void => {
  activeHolidayRequestId.value = id;
  toggleDetailsModalModal();
};

const approveHolidayRequest = async (id: string): Promise<void> => {
  loading.value = true
  await useHolidayRequestStore().approveHolidayRequest(id)
  loading.value = false
  emits("loader")
};

const rejectHolidayRequest = async (id: string): Promise<void> => {
  loading.value = true
  await useHolidayRequestStore().rejectHolidayRequest(id)
  loading.value = false
  emits("loader")
};

const holidayRequestRows = computed((): DataGridRow[] =>
  props.holidayRequests.map(
    (holidayRequest) => new HolidayRequestDataGridRow(holidayRequest)
  )
);
const handelClick = {
  view_details: showDetails,
  approve:approveHolidayRequest,
  reject:rejectHolidayRequest,
}
</script>
