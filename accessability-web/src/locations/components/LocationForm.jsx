
import React from 'react';
import { Form, Input, Button, InputNumber, Divider } from 'antd';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const { TextArea } = Input;

const googleMapsApiKey = import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: '100%',
  height: '400px',
};

const LocationForm = ({ location, isEditing, onSubmit }) => {
  const [form] = Form.useForm();
  const [selectedLocation, setSelectedLocation] = React.useState({
    lat: location ? location.coordinates.coordinates[1] : 51.4982,
    lon: location ? location.coordinates.coordinates[0] : 31.2849,
  });

  React.useEffect(() => {
    if (location) {
      form.setFieldsValue({
        name: location.name,
        address: location.address,
        lat: location.coordinates.coordinates[1],
        lon: location.coordinates.coordinates[0],
        type: location.type,
        category: location.category,
        description: location.description,
        phones: location.contacts.phones.join(','),
        emails: location.contacts.emails.join(','),
        working_hours: location.working_hours,
      });

      setSelectedLocation({
        lat: location.coordinates.coordinates[1],
        lon: location.coordinates.coordinates[0],
      });
    }

  }, [location, form]);

  const handleMapClick = (e) => {
    setSelectedLocation({
      lat: e.latLng.lat(),
      lon: e.latLng.lng(),
    });
    form.setFieldsValue({
      lat: e.latLng.lat(),
      lon: e.latLng.lng(),
    });
  };

  const handleSubmit = (values) => {
    const updatedLocation = {
      ...location,
      name: values.name,
      address: values.address,
      coordinates: {
        type: 'Point',
        coordinates: [values.lon, values.lat],
      },
      type: values.type,
      category: values.category,
      description: values.description,
      contacts: {
        phones: values.phones.split(','),
        emails: values.emails.split(','),
      },
      working_hours: values.working_hours,
      updated_at: new Date().toISOString(),
    };

    onSubmit(updatedLocation);
    form.resetFields();
  };

  return (
    <div>
      <h2>{isEditing ? 'Оновити локацію' : 'Створити нову локацію'}</h2>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item label="Назва" name="name" rules={[{ required: true, message: 'Введіть назву!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Адреса" name="address" rules={[{ required: true, message: 'Введіть адресу!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Координати (Latitude, Longitude)" required>
          <Form.Item name="lat" noStyle rules={[{ required: true, message: 'Введіть широту!' }]}>
            <InputNumber style={{ width: '48%' }} placeholder="Широта" />
          </Form.Item>
          <Form.Item name="lon" noStyle rules={[{ required: true, message: 'Введіть довготу!' }]}>
            <InputNumber style={{ width: '48%', marginLeft: '4%' }} placeholder="Довгота" />
          </Form.Item>
        </Form.Item>

        <Divider />

        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat: selectedLocation.lat, lng: selectedLocation.lon }}
            zoom={14}
            onClick={handleMapClick}
          >
            <Marker position={{ lat: selectedLocation.lat, lng: selectedLocation.lon }} />
          </GoogleMap>
        </LoadScript>

        <Divider />

        <Form.Item label="Тип" name="type" rules={[{ required: true, message: 'Введіть тип локації!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Категорія" name="category" rules={[{ required: true, message: 'Введіть категорію!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Опис" name="description" rules={[{ required: true, message: 'Введіть опис!' }]}>
          <TextArea />
        </Form.Item>

        <Form.Item label="Телефони (через кому)" name="phones" rules={[{ required: true, message: 'Введіть телефони!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Email (через кому)" name="emails" rules={[{ required: true, message: 'Введіть email!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Робочий час" name="working_hours" rules={[{ required: true, message: 'Введіть робочий час!' }]}>
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          {isEditing ? 'Оновити локацію' : 'Додати локацію'}
        </Button>
      </Form>
    </div>
  );
};

export default LocationForm;
