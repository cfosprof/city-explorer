const formatDate = (dateString) => {
  const date = new Date(dateString);
  const today = new Date();
  const isToday = date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();

  const day = isToday ? 'Today' : new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
  const dayMonth = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit' }).format(date);
  return { day, dayMonth };
};

export default formatDate;
