import fs from 'fs'
import path from 'path'
import { initTracking } from '../src/helpers/init'
it('should init a folder with a Sprint_01.md file', () => {
  // Arrange
  const folderName = 'Sprints'
  const fileName = 'Sprint_01.md'
  const folderPath = folderName
  const filePath = path.join(folderPath, fileName)
  const content = 'Contenido del archivo'

  // Act
  initTracking(folderName, fileName)

  // Assert
  expect(fs.existsSync(folderPath)).toBe(true)
  expect(fs.existsSync(filePath)).toBe(true)
  expect(fs.readFileSync(filePath, 'utf8')).toBe(content)
})
