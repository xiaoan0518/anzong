import DETAILMONITORING from '../pages/detailMonitoring.vue'
import TABLEDETAIL from '../pages/tableDetail.vue'
import ANAN from '../components/anan.vue'
export default [
   {
    path: '/detailmonitoring',
    name: 'detailmonitoring',
    component: DETAILMONITORING,
   },
   {
      path: '/tabledetail',
      component: TABLEDETAIL
   },
   {
      path: '/anan',
      component: ANAN
   },
   {
      path: '/',
      redirect: 'detailmonitoring'
   },
]