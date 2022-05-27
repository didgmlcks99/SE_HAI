/* eslint-disable prettier/prettier */
import React from 'react'

/// 학회 위원회 ///
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// notice
const CommitteeList = React.lazy(() => import('./views/committee/notice/postlist/PostList'))
const CommitteeRead = React.lazy(() => import('./views/committee/notice/read/Read'))
const CommitteeUpdate = React.lazy(() => import('./views/committee/notice/update/Update'))
const CommitteeWrite = React.lazy(() => import('./views/committee/notice/write/Write'))
// inquiry
const InquiryList = React.lazy(() => import('./views/committee/inquiry/postlist/PostList'))
const InquiryRead = React.lazy(() => import('./views/committee/inquiry/read/Read'))
const InquiryUpdate = React.lazy(() => import('./views/committee/inquiry/update/Update'))
const InquiryWrite = React.lazy(() => import('./views/committee/inquiry/write/Write'))

// // test
// const PostList = React.lazy(() => import('./views/pages/postlist/PostList'))
// const Read = React.lazy(() => import('./views/pages/read/Read'))
// const Update = React.lazy(() => import('./views/pages/update/Update'))
// const Write = React.lazy(() => import('./views/pages/write/Write'))

const Login = React.lazy(() => import('./views/pages/login/Login'))

//institute
const Intromain = React.lazy(() => import('./views/institute/introduce/intromain/Intromain'))
const Introwrite = React.lazy(() => import('./views/institute/introduce/write/Write'))

const Recruitmain = React.lazy(() => import('./views/institute/recruit/recruitmain/Recruitmain'))
const Recruitwrite = React.lazy(() => import('./views/institute/recruit/write/Write'))

/////////////////////////////// Not used /////////////////////////////
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  /// committee ///
  // notice
  { path: '/', exact: true, name: 'Home', element: Dashboard },
  { path: '/committee/notice', exact: true, name: 'Notice Main', element: CommitteeList }, // postlist
  { path: '/committee/notice/read/:postid', exact: true, name: 'Notice Read', element: CommitteeRead },
  { path: '/committee/notice/update/:postid', exact: true, name: 'Notice Update', element: CommitteeUpdate },
  { path: '/committee/notice/write', exact: true, name: 'Notice Write', element: CommitteeWrite },
  // inquiry
  { path: '/committee/inquiry', exact: true, name: 'Inquiry List', element: InquiryList }, // postlist
  { path: '/committee/inquiry/read/:postid', exact: true, name: 'Inquiry Read', element: InquiryRead },
  { path: '/committee/inquiry/update/:postid', exact: true, name: 'Inquiry Update', element: InquiryUpdate },
  { path: '/committee/inquiry/write', exact: true, name: 'Inquiry Write', element: InquiryWrite },
  // institute
  { path: '/institute/introduce/intromain', exact: true, name: 'Intromain', element: Intromain},
  { path: '/institute/introduce/write', exact: true, name: 'Introwrite', element: Introwrite},

  { path: '/institute/recruit/recruitmain', exact: true, name: 'Recruitmain', element: Recruitmain },
  { path: '/institute/recruit/write', exact: true, name: 'Recruitwrite', element: Recruitwrite},
  // login
  { path: '/pages/login', name: 'Login', element: Login },
  ////////////////////////////////////////////////////////////////////
  // test
  // { path: '/pages/postlist', name: 'PostList', element: PostList },
  // { path: '/pages/read/:postid', exact: true, name: 'Read', element: Read },
  // { path: '/pages/update/:postid', exact: true, name: 'Update', element: Update },
  // { path: '/pages/write', exact: true, name: 'Write', element: Write },
  // { path: '/', exact: true, name: 'Home' },
  // { path: '/list', exact: true, name: 'List' },
  // { path: '/pages/read/:postid', exact: true, name: 'Read', element: Read },
  // { path: '/pages/update/:postid', exact: true, name: 'Update', element: Update },
  // { path: '/pages/write', exact: true, name: 'Write', element: Write },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
  //{ path: '/pages/login', name: 'Login', element: Login },
  //{ path: '/pages/postlist', name: 'PostList', element: PostList },
]

export default routes
