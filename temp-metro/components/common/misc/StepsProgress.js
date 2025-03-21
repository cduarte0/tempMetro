export default function StepsProgress({ steps, currentStep }) {
  return (
    <section className="flex items-center pt-2 pb-6 justify-center">
      {steps.map((item, index) => (
        <div key={index} className="flex items-center">
          {/* Circle */}
          <div
            className={`w-5 h-5 flex items-center justify-center border-2 rounded-full ${
              index <= currentStep
                ? "bg-[#06378E] border-white shadow-[0_0_4px_2px_rgba(0,0,0,0.2)]"
                : "bg-white border-gray-300"
            }`}
          >
            {index < currentStep && (
              <div className="w-2.5 h-2.5 bg-white rounded-full" />
            )}
          </div>

          {/* Line */}
          {index < steps.length - 1 && (
            <div
              className={`w-24 h-[2px] ${
                index < currentStep || index === 0 ? "bg-[#06378E]" : "bg-gray-300"
              }`}
            />
          )}

          {/* Step Name */}
          <span
            className={`text-xs mt-2 text-center ${
              index <= currentStep ? "text-[#06378E]" : "text-gray-400"
            }`}
            style={{ width: "80px" }}
          >
            {item}
          </span>
        </div>
      ))}
    </section>
  );
}
