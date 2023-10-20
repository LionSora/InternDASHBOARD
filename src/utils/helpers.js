import axios from 'axios'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

export const slug = (str) => {
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  const from =
    'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆĞÍÌÎÏİŇÑÓÖÒÔÕØŘŔŠŞŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇğíìîïıňñóöòôõøðřŕšşťúůüùûýÿžþÞĐđßÆaàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ·/_,:;'
  const to =
    'AAAAAACCCDEEEEEEEEGIIIIINNOOOOOORRSSTUUUUUYYZaaaaaacccdeeeeeeeegiiiiinnooooooorrsstuuuuuyyzbBDdBAaaaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd------'
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  return str
}
export const copyToClipboard = (text) => {
  navigator?.clipboard?.writeText?.(text)
}
export const errorResponse = (error) => {
  if (axios.isAxiosError(error)) {
    let message = error.response ? error.response.data.message : error.message
    throw new Error(message)
  } else if (error instanceof Error) {
    // console.log(error.message, "-", );
    throw new Error(error.message)
  } else {
    throw new Error('Server Error Occurred!')
  }
}

const alertConfig = {
  width: 500,
  iconColor: 'white',
  showCancelButton: true,
  margin: '0 !important',
  confirmButtonColor: '#2196F3',
}
export const alert = {
  success: (text) =>
    toast.success(text, { position: toast.POSITION.TOP_RIGHT }),
  error: (text) => toast.error(text, { position: toast.POSITION.TOP_RIGHT }),
  confirm: (title = '', message, options = {}) => {
    const {
      icon,
      confirmButtonText = 'OK',
      cancelButtonText = 'Cancel',
    } = options
    return Swal.fire({
      ...alertConfig,
      title,
      icon,
      showConfirmButton: true,
      focusConfirm: false,
      reverseButtons: true,
      confirmButtonText,
      html: `<p style="margin-top: 16px !important;">${message ?? ''}</p>`,
      cancelButtonText,
      cancelButtonColor: '#666',
      customClass: {
        title: 'swal-title-custom',
        icon: 'swal-icon-custom',
        // icon: !icon.includes('error') ? 'swal-icon-custom' : 'swal-icon-custom-error',
        popup: 'swal-popup-custom',
        // confirmButton: showConfirmButton ? 'swal-confirm-button-custom' : undefined,
        // cancelButton: 'swal-cancel-button-custom'
      },
    })
  },
}

export const concat = (preArray, nextArray, key) => {
  return [...nextArray, ...preArray].filter(
    (
      (s) => (a) =>
        !s.has(a[key] || a['id'] || a['_id']) &&
        s.add(a[key] || a['id'] || a['_id'])
    )(new Set())
  )
}

export const numberFormat = (n) => {
  if (n < 1e3) return n
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + 'K'
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M'
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B'
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T'
}
export const urlify = (text) => {
  return text.match(/(https?:\/\/[^\s]+)/g)
}

export const shuffle = (arr) => {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}
