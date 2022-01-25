import * as React from "react"

export default function GitHubIcon(props) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    width={40}
    height={40}
    {...props}
  >
    <path fill="#8bb7f0" d="M2.5 2.5h35v35h-35z" />
    <path fill="#4e7ab5" d="M37 3v34H3V3h34m1-1H2v36h36V2z" />
    <path
      fill="#fff"
      d="M27 37V24h4.93l.698-5H27v-3.384c0-1.568.702-2.636 2.95-2.636l3.05-.001V8.225c-.496-.066-2.381-.213-4.361-.213-4.134 0-6.639 2.523-6.639 7.157V19h-5v5h5v13h5z"
    />
  </svg>
  )
}
