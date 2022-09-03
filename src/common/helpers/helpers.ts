import {paginatedInput} from "../graphql/paginated.input";
import { diskStorage, DiskStorageOptions } from 'multer';
import { extname } from "path";

export function normalizePagination(paginated:paginatedInput): paginatedInput{
    !paginated ? paginated = {} as paginatedInput : "";
    paginated.limit <= 0 ? paginated.limit = 100 : '';
    paginated.skip === null ? paginated.limit = 0 : '';
    return paginated;
}
export function customStorage(directory:String = 'fichiers')
     {
    const storage =  diskStorage(
          {
              destination: __dirname +'/../../__storage/' + directory,
              filename: (req,file,callback) => {
                  const randomName ="upload-"  + Math.floor(Date.now() / 1000);
                  callback(null,randomName + file.originalname)
              }
          }
        )
    return storage;
    }