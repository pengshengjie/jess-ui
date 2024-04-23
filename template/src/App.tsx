
import './App.css'
import Button from '../../packages/button'
import { generate, presetDarkPalettes } from '@ant-design/colors';

// Generate dark color palettes by a given color
const colors = generate('#1890ff', {
  theme: 'dark',
  backgroundColor: '#141414',
});
presetDarkPalettes;
colors
debugger

function App() {

  return (
    <>
      <div className=''>
        <Button>ssdsddsd</Button>
      </div>
    </>
  )
}

export default App
