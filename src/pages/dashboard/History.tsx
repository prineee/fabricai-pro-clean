import DashboardLayout from "../../layouts/DashboardLayout";



export default function History() {

  const history = [

    {
      type: "Blog",
      title: "AI Marketing Trends",
      date: "Today",
    },

    {
      type: "Email",
      title: "Product Launch Campaign",
      date: "Yesterday",
    },

    {
      type: "Ad",
      title: "Fashion Brand Ad Copy",
      date: "2 days ago",
    },

  ];



  return (
    <DashboardLayout>

      <h1
        style={{
          fontSize: "42px",
          marginBottom: "30px",
        }}
      >
        AI History
      </h1>



      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >

        {
          history.map((item, index) => (

            <div
              key={index}
              style={{
                background: "#0f172a",
                borderRadius: "18px",
                padding: "25px",
                border: "1px solid #1e293b",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >

              <div>

                <h2
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h2>

                <p
                  style={{
                    color: "#94a3b8",
                  }}
                >
                  {item.type}
                </p>

              </div>



              <div
                style={{
                  color: "#94a3b8",
                }}
              >
                {item.date}
              </div>

            </div>

          ))
        }

      </div>

    </DashboardLayout>
  );
}