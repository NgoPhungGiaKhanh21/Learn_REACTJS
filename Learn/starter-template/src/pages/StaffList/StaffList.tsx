import { NavLink, Outlet, useNavigate } from 'react-router-dom'

export default function StaffList() {
  const navigate = useNavigate()
  return (
    <div>
      <h1 className='mb-6 text-lg'>Staff List</h1>
      <div className='border-b border-gray-200 text-center text-sm font-medium text-gray-500  '>
        <ul className='-mb-px flex flex-wrap'>
          <li className='mr-2'>
            <NavLink
              to='12345'
              className={({ isActive }) =>
                `inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 ${
                  isActive ? 'avtive border-blue-600 p-4 text-blue-600' : ''
                }`
              }
            >
              Profile
            </NavLink>
          </li>
          <li className='mr-2'>
            <NavLink
              to='list'
              className={({ isActive }) =>
                `inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 ${
                  isActive ? 'avtive border-blue-600 p-4 text-blue-600' : ''
                }`
              }
              aria-current='page'
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>

      {/* <ul>
        <li>
          <a href='#' className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
            Staff 1
          </a>
        </li>
        <li>
          <a href='#' className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
            Staff 2
          </a>
        </li>
        <li>
          <a href='#' className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
            Staff 3
          </a>
        </li>
      </ul> */}
      {/* <AddStaff /> */}

      <Outlet />

      <button
        className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
        onClick={() => navigate('/login')}
      >
        Đăng xuất
      </button>
    </div>
  )
}