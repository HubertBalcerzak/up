import { useContext } from 'react'

import {
  IUploadBoxContentContext,
  UploadBoxContentContext
} from '../../providers/UploadBoxContentProvider'
import { IHomePageProps } from '../../pages'

export interface IHomePageStateProps {
  uploadBoxContent: IUploadBoxContentContext
}

const useHomePage = ({}: IHomePageProps): IHomePageStateProps => {
  const uploadBoxContent = useContext(UploadBoxContentContext)
  return { uploadBoxContent }
}

export default useHomePage
