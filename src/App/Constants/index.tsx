export const insurances = [
  {
    insurance: {
      description:
        'Con nuestro Seguro Vida Activa podrás disfrutar el día a día con tranquilidad, gracias al respaldo y apoyo frente a las consecuencias de eventuales accidentes que puedas sufrir. Posee excelente cobertura, un precio muy conveniente y, en caso de fallecimiento, apoyo financiero para tus seres queridos con un capital asegurado.',
      image:
        'https://ventaenlinea.bicevida.cl/pub/media/catalog/product/cache/69eb2560c3d44c78f7327201dc5a282b/i/m/img-01.jpg',
      name: 'Seguro Vida Activa',
      price: '9000'
    }
  },
  {
    insurance: {
      description:
        'El Seguro Viaje Protegido cuenta con una cobertura de Muerte Accidental y Asistencia en Viaje, que protege al titular en caso de accidente durante el traslado y periodo del viaje, junto con otorgar servicios de asistencia en viaje tanto para el titular como a sus acompañantes. Contamos con coberturas de USD 60.000 para menores de 85 años y coberturas de USD 150.000 y USD 250.000 para menores de 69 años.',
      image:
        'https://ventaenlinea.bicevida.cl/pub/media/catalog/product/cache/69eb2560c3d44c78f7327201dc5a282b/i/m/img-02.jpg',
      name: 'Seguro Viaje Protegido',
      price: '8000'
    }
  }
];

export interface IInsuranceFake {
  insurance?: IInsurance
}

export interface IInsurance {
  description?: string
  image?: string
  name?: string
  price?: number
}