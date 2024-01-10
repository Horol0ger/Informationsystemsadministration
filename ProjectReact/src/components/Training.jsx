function Training({
  id,
  first_name,
  last_name,
  email,
  certificate_002,
  date_of_birth,
  password,
  ammo_score,
  role,
}) {
  return (
    <div className="news">
      <p>Имя: {first_name}</p>
      <p>Фамилия: {last_name}</p>
      <p>Почта: {email}</p>
      <p>Есть ли разрешение: {certificate_002}</p>
      <p>Дата рождения: {date_of_birth}</p>
      <p>Хэш пароля: {password}</p>
      <p>Количечство патронов: {ammo_score}</p>
      <p>Роль: {role}</p>
    </div>
  );
}

export default Training;
