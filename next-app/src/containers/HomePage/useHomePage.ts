import { useContext } from 'react'

import {
  IUploadBoxContentContext,
  UploadBoxContentContext
} from '../../providers/UploadBoxContentProvider'

export interface IHomePageStateProps {
  uploadBoxContent: IUploadBoxContentContext
}

const useHomePage = ({}: IHomePageStateProps): IHomePageStateProps => {
  const uploadBoxContent = useContext(UploadBoxContentContext)
  return { uploadBoxContent }
}

export default useHomePage
