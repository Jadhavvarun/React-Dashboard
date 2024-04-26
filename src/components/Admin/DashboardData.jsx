const DashboardData = () => {
  return (
    <div className="px-8 mt-36">
      <div className="flex gap-8">
        <div className="relative">
          <img src="/1.jpeg" alt="orders" />
          <div className="absolute inset-0 flex flex-col items-start justify-between text-white text-4xl font-bold p-8">
            <div>Total no. of Orders</div>
            <div>512</div>
          </div>
        </div>
        <div className="relative">
          <img src="/3.jpeg" alt="shipped" />
            <div className="absolute inset-0 flex flex-col items-start justify-between text-white text-4xl font-bold p-8">
              <div>Products shipped</div>
              <div>456</div>
            </div>
        </div>
        <div className="relative">
          <img src="/2.jpeg" alt="pending" />
          <div className="absolute inset-0 flex flex-col items-start justify-between text-white text-4xl font-bold p-8">
              <div>Pending</div>
              <div>12</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardData;
