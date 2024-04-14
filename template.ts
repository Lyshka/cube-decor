export const templateDimension = {
  template1: `  <div class="flex justify-between">
    <div class="flex flex-col items-center gap-5 relative">
      <div
        class="relative w-[278px] imgHouse h-[165px] rounded-lg bg-white outline-transparent transition-all duration-500 flex justify-center items-center"
      >
        <img
          class="h-full w-full object-contain"
          src="configurationWindow2.webp"
          alt="Окно"
        />
      </div>
  
      <span class="font-medium text-xl leading-[24.38px] text-center"
        >Двухстворчатое окно</span
      >
    </div>
  
    <div class="w-[390px] flex-shrink-0 p-5 bg-white rounded-lg space-y-5">
      <div class="containerInputRange">
        <div
          class="flex items-center gap-5 leading-[21.94px] text-lg font-medium"
        >
          <span>Ширина:</span>
          <p class="flex gap-2.5 items-center">
            <span class="rangeValue">1000</span> мм
          </p>
        </div>
  
        <div class="space-y-0.5">
          <input
            value="1000"
            min="1000"
            max="1900"
            type="range"
            class="w-full inputRange"
          />
  
          <div
            class="flex items-center justify-between leading-[17.07px] text-sm"
          >
            <span>1000</span>
  
            <span>1900</span>
          </div>
        </div>
      </div>
  
      <div class="containerInputRange">
        <div
          class="flex items-center gap-5 leading-[21.94px] text-lg font-medium"
        >
          <span>Высота:</span>
          <p class="flex gap-2.5 items-center">
            <span class="rangeValue">1000</span> мм
          </p>
        </div>
  
        <div class="space-y-0.5">
          <input
            value="1000"
            min="1000"
            max="1900"
            type="range"
            class="w-full inputRange"
          />
  
          <div
            class="flex items-center justify-between leading-[17.07px] text-sm"
          >
            <span>1000</span>
  
            <span>1900</span>
          </div>
        </div>
      </div>
    </div>
  
    <div class="flex self-end items-center gap-4 relative">
      <div
        class="border-[#E8EBF0] border bg-white rounded-full w-[21px] h-[21px] flex justify-center items-center"
      >
        <div class="bg-primary rounded-full w-[9px] h-[9px]">&nbsp;</div>
      </div>
  
      <label class="leading-[21.94px] font-medium text-lg" for=""
        >Я не знаю<br />размеров</label
      >
  
      <input checked type="checkbox" class="absolute w-full h-full opacity-0" />
    </div>
  </div>`,
  template2: `  <div class="flex justify-between">
  <div class="flex flex-col items-center gap-5 relative">
    <div
      class="relative w-[278px] imgHouse h-[165px] rounded-lg bg-white outline-transparent transition-all duration-500 flex justify-center items-center"
    >
      <img
        class="h-full w-full object-contain"
        src="configurationWindow11.webp"
        alt="Окно"
      />
    </div>
  
    <span class="font-medium text-xl leading-[24.38px] text-center"
      >Балконный блок</span
    >
  </div>
  
  <div class="w-[390px] space-y-5">
    <div class="w-full flex-shrink-0 p-5 bg-white rounded-lg space-y-5">
      <div class="containerInputRange">
        <div
          class="flex items-center gap-5 leading-[21.94px] text-lg font-medium"
        >
          <span>Ширина двери:</span>
          <p class="flex gap-2.5 items-center">
            <span class="rangeValue">1000</span> мм
          </p>
        </div>
  
        <div class="space-y-0.5">
          <input
            value="1000"
            min="1000"
            max="1900"
            type="range"
            class="w-full inputRange"
          />
  
          <div
            class="flex items-center justify-between leading-[17.07px] text-sm"
          >
            <span>1000</span>
  
            <span>1900</span>
          </div>
        </div>
      </div>
  
      <div class="containerInputRange">
        <div
          class="flex items-center gap-5 leading-[21.94px] text-lg font-medium"
        >
          <span>Высота двери:</span>
          <p class="flex gap-2.5 items-center">
            <span class="rangeValue">1000</span> мм
          </p>
        </div>
  
        <div class="space-y-0.5">
          <input
            value="1000"
            min="1000"
            max="1900"
            type="range"
            class="w-full inputRange"
          />
  
          <div
            class="flex items-center justify-between leading-[17.07px] text-sm"
          >
            <span>1000</span>
  
            <span>1900</span>
          </div>
        </div>
      </div>
    </div>
  
    <div class="w-full flex-shrink-0 p-5 bg-white rounded-lg space-y-5">
      <div class="containerInputRange">
        <div
          class="flex items-center gap-5 leading-[21.94px] text-lg font-medium"
        >
          <span>Ширина окна:</span>
          <p class="flex gap-2.5 items-center">
            <span class="rangeValue">1000</span> мм
          </p>
        </div>
  
        <div class="space-y-0.5">
          <input
            value="1000"
            min="1000"
            max="1900"
            type="range"
            class="w-full inputRange"
          />
  
          <div
            class="flex items-center justify-between leading-[17.07px] text-sm"
          >
            <span>1000</span>
  
            <span>1900</span>
          </div>
        </div>
      </div>
  
      <div class="containerInputRange">
        <div
          class="flex items-center gap-5 leading-[21.94px] text-lg font-medium"
        >
          <span>Высота окна:</span>
          <p class="flex gap-2.5 items-center">
            <span class="rangeValue">1000</span> мм
          </p>
        </div>
  
        <div class="space-y-0.5">
          <input
            value="1000"
            min="1000"
            max="1900"
            type="range"
            class="w-full inputRange"
          />
  
          <div
            class="flex items-center justify-between leading-[17.07px] text-sm"
          >
            <span>1000</span>
  
            <span>1900</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="flex self-end items-center gap-4 relative">
    <div
      class="border-[#E8EBF0] border bg-white rounded-full w-[21px] h-[21px] flex justify-center items-center"
    >
      <div class="bg-primary rounded-full w-[9px] h-[9px]">&nbsp;</div>
    </div>
  
    <label class="leading-[21.94px] font-medium text-lg" for=""
      >Я не знаю<br />размеров</label
    >
  
    <input checked type="checkbox" class="absolute w-full h-full opacity-0" />
  </div>
  </div>`,
  template3: `  <div class="flex justify-between">
      <div class="flex flex-col items-center gap-5 relative">
        <div
          class="relative w-[278px] imgHouse h-[165px] rounded-lg bg-white outline-transparent transition-all duration-500 flex justify-center items-center"
        >
          <img
            class="h-full w-full object-contain"
            src="configurationWindow10.webp"
            alt="Окно"
          />
        </div>
  
        <span class="font-medium text-xl leading-[24.38px] text-center"
          >П-образный балкон</span
        >
      </div>
  
      <div class="w-[390px] flex-shrink-0 p-5 bg-white rounded-lg space-y-5">
        <div class="containerInputRange">
          <div
            class="flex items-center gap-5 leading-[21.94px] text-lg font-medium"
          >
            <span>Ширина фронтальная:</span>
            <p class="flex gap-2.5 items-center">
              <span class="rangeValue">1000</span> мм
            </p>
          </div>
  
          <div class="space-y-0.5">
            <input
              value="1000"
              min="1000"
              max="1900"
              type="range"
              class="w-full inputRange"
            />
  
            <div
              class="flex items-center justify-between leading-[17.07px] text-sm"
            >
              <span>1000</span>
  
              <span>1900</span>
            </div>
          </div>
        </div>
  
        <div class="containerInputRange">
          <div
            class="flex items-center gap-5 leading-[21.94px] text-lg font-medium"
          >
            <span>Ширина боковая:</span>
            <p class="flex gap-2.5 items-center">
              <span class="rangeValue">1000</span> мм
            </p>
          </div>
  
          <div class="space-y-0.5">
            <input
              value="1000"
              min="1000"
              max="1900"
              type="range"
              class="w-full inputRange"
            />
  
            <div
              class="flex items-center justify-between leading-[17.07px] text-sm"
            >
              <span>1000</span>
  
              <span>1900</span>
            </div>
          </div>
        </div>
  
        <div class="containerInputRange">
          <div
            class="flex items-center gap-5 leading-[21.94px] text-lg font-medium"
          >
            <span>Высота:</span>
            <p class="flex gap-2.5 items-center">
              <span class="rangeValue">1000</span> мм
            </p>
          </div>
  
          <div class="space-y-0.5">
            <input
              value="1000"
              min="1000"
              max="1900"
              type="range"
              class="w-full inputRange"
            />
  
            <div
              class="flex items-center justify-between leading-[17.07px] text-sm"
            >
              <span>1000</span>
  
              <span>1900</span>
            </div>
          </div>
        </div>
      </div>
  
      <div class="flex self-end items-center gap-4 relative">
        <div
          class="border-[#E8EBF0] border bg-white rounded-full w-[21px] h-[21px] flex justify-center items-center"
        >
          <div class="bg-primary rounded-full w-[9px] h-[9px]">&nbsp;</div>
        </div>
  
        <label class="leading-[21.94px] font-medium text-lg" for=""
          >Я не знаю<br />размеров</label
        >
  
        <input checked type="checkbox" class="absolute w-full h-full opacity-0" />
      </div>
    </div>`,
};
