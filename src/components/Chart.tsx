import { ApexOptions } from 'apexcharts'

import dynamic from 'next/dynamic'

const ApexChart = dynamic(async () => await import('react-apexcharts'), {
  ssr: false
})

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false
    },
    fontFamily: 'Montserrat'
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        total: {
          show: false
        },
        name: {
          color: '#fff'
        },
        value: {
          color: '#fff'
        }
      }
    }
  },
  labels: ['HTML 5 + CSS3', 'JavaScript', 'React JS', 'Node JS'],
  colors: ['#e56027', '#ead41c', '#61dbfb', '#68a063'],
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      opacityFrom: 1,
      opacityTo: 1
    }
  }
}

const series = [100, 85, 80, 65]

export function Chart () {
  return (
		<ApexChart options={options} series={series} type='radialBar' height={320} width={'100%'} />
  )
}
