import fs from 'fs'
import path from 'path'

export const initTracking = (folderPath: string, fileName: string) => {
  if (fs.existsSync(folderPath)) {
    console.log('Folder already exists')
    return
  }
  // Crea la carpeta
  fs.mkdirSync(folderPath)

  // Crea el archivo dentro de la carpeta
  fs.writeFileSync(path.join(folderPath, fileName), 'Contenido del archivo')
}
