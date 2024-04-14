import { TEMPLTE, typeWindow } from "./typeWindow";

export const templateDimension = (dimensionInfo: typeWindow) => {
  const {
    img,
    maxHeightDoor,
    maxHeightWindow,
    maxWidthDoor,
    maxWidthWindow,
    minHeightDoor,
    minHeightWindow,
    minWidthDoor,
    minWidthWindow,
    name,
    template,
    title,
    maxWidthFront,
    maxWidthBack,
    minWidthFront,
    minWidthBack,
  } = dimensionInfo;

  if (template === TEMPLTE.template1) {
    return `  <div class="flex justify-between">
    <div class="flex flex-col items-center gap-5 relative">
      <div
        class="relative w-[278px] imgHouse h-[165px] rounded-lg bg-white outline-transparent transition-all duration-500 flex justify-center items-center"
      >
        <img
          class="h-full w-full object-contain"
          src="${img}"
          alt="Окно"
        />
      </div>
  
      <span class="font-medium text-xl leading-[24.38px] text-center"
        >${title}</span
      >
    </div>
  
    <div class="w-[390px] flex-shrink-0 p-5 bg-white rounded-lg space-y-5">
      <div class="containerInputRange">
        <div
          class="flex items-center gap-5 leading-[21.94px] text-lg font-medium"
        >
          <span>Ширина:</span>
          <p class="flex gap-2.5 items-center">
            <span class="rangeValue">${minWidthWindow}</span> мм
          </p>
        </div>
  
        <div class="space-y-0.5">
          <input
            value="${minWidthWindow}"
            min="${minWidthWindow}"
            max="${maxWidthWindow}"
            type="range"
            data-name="${name}"
            name="${name}WidthWindow"
            class="w-full inputRange"
          />
  
          <div
            class="flex items-center justify-between leading-[17.07px] text-sm"
          >
            <span>${minWidthWindow}</span>
  
            <span>${maxWidthWindow}</span>
          </div>
        </div>
      </div>
  
      <div class="containerInputRange">
        <div
          class="flex items-center gap-5 leading-[21.94px] text-lg font-medium"
        >
          <span>Высота:</span>
          <p class="flex gap-2.5 items-center">
            <span class="rangeValue">${minHeightWindow}</span> мм
          </p>
        </div>
  
        <div class="space-y-0.5">
          <input
            value="${minHeightWindow}"
            min="${minHeightWindow}"
            max="${maxHeightWindow}"
            type="range"
            data-name="${name}"
            name="${name}HeightWindow"
            class="w-full inputRange"
          />
  
          <div
            class="flex items-center justify-between leading-[17.07px] text-sm"
          >
            <span>${minHeightWindow}</span>
  
            <span>${maxHeightWindow}</span>
          </div>
        </div>
      </div>
    </div>
  
    <div id="${name}NotValueContainer" class="flex self-end items-center gap-4 relative NotValueContainer active">
      <div
        class="border-[#E8EBF0] border bg-white rounded-full w-[21px] h-[21px] flex justify-center items-center"
      >
        <div class="bg-primary iconChecked rounded-full w-[9px] h-[9px] transition-all opacity-0 duration-500">&nbsp;</div>
      </div>
  
      <label class="leading-[21.94px] font-medium text-lg" for=""
        >Я не знаю<br />размеров</label
      >
  
      <input id="${name}NotValue" name="${name}NotValue" checked type="checkbox" class="absolute w-full h-full opacity-0" />
    </div>
  </div>`;
  }

  if (template === TEMPLTE.template2) {
    return `  <div class="flex justify-between">
    <div class="flex flex-col items-center gap-5 relative">
      <div
        class="relative w-[278px] imgHouse h-[165px] rounded-lg bg-white outline-transparent transition-all duration-500 flex justify-center items-center"
      >
        <img
          class="h-full w-full object-contain"
          src="${img}"
          alt="Окно"
        />
      </div>
    
      <span class="font-medium text-xl leading-[24.38px] text-center"
        >${title}</span
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
              <span class="rangeValue">${minWidthDoor}</span> мм
            </p>
          </div>
    
          <div class="space-y-0.5">
            <input
              value="${minWidthDoor}"
              min="${minWidthDoor}"
              max="${maxWidthDoor}"
              type="range"
              data-name="${name}"
              name="${name}WidthDoor"
              class="w-full inputRange"
            />
    
            <div
              class="flex items-center justify-between leading-[17.07px] text-sm"
            >
              <span>${minWidthDoor}</span>
    
              <span>${maxWidthDoor}</span>
            </div>
          </div>
        </div>
    
        <div class="containerInputRange">
          <div
            class="flex items-center gap-5 leading-[21.94px] text-lg font-medium"
          >
            <span>Высота двери:</span>
            <p class="flex gap-2.5 items-center">
              <span class="rangeValue">${minHeightDoor}</span> мм
            </p>
          </div>
    
          <div class="space-y-0.5">
            <input
              value="${minHeightDoor}"
              min="${minHeightDoor}"
              max="${maxHeightDoor}"
              type="range"
              class="w-full inputRange"
              data-name="${name}"
              name="${name}HeightDoor"
            />
    
            <div
              class="flex items-center justify-between leading-[17.07px] text-sm"
            >
              <span>${minHeightDoor}</span>
    
              <span>${maxHeightDoor}</span>
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
              <span class="rangeValue">${minWidthWindow}</span> мм
            </p>
          </div>
    
          <div class="space-y-0.5">
            <input
              value="${minWidthWindow}"
              min="${minWidthWindow}"
              max="${maxWidthWindow}"
              type="range"
              class="w-full inputRange"
              data-name="${name}"
              name="${name}WidthWindow"
            />
    
            <div
              class="flex items-center justify-between leading-[17.07px] text-sm"
            >
              <span>${minWidthWindow}</span>
    
              <span>${maxWidthWindow}</span>
            </div>
          </div>
        </div>
    
        <div class="containerInputRange">
          <div
            class="flex items-center gap-5 leading-[21.94px] text-lg font-medium"
          >
            <span>Высота окна:</span>
            <p class="flex gap-2.5 items-center">
              <span class="rangeValue">${minHeightWindow}</span> мм
            </p>
          </div>
    
          <div class="space-y-0.5">
            <input
              value="${minHeightWindow}"
              min="${minHeightWindow}"
              max="${maxHeightWindow}"
              type="range"
              class="w-full inputRange"
              data-name="${name}"
              name="${name}HeightWindow"
            />
    
            <div
              class="flex items-center justify-between leading-[17.07px] text-sm"
            >
              <span>${minHeightWindow}</span>
    
              <span>${maxHeightWindow}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div id="${name}NotValueContainer" class="flex self-end items-center gap-4 relative NotValueContainer active">
      <div
        class="border-[#E8EBF0] border bg-white rounded-full w-[21px] h-[21px] flex justify-center items-center"
      >
        <div class="bg-primary iconChecked rounded-full w-[9px] h-[9px] transition-all opacity-0 duration-500">&nbsp;</div>
      </div>
    
      <label class="leading-[21.94px] font-medium text-lg" for=""
        >Я не знаю<br />размеров</label
      >
    
      <input id="${name}NotValue" name="${name}NotValue" checked type="checkbox" class="absolute w-full h-full opacity-0" />
    </div>
    </div>`;
  }

  if (template === TEMPLTE.template3) {
    return `  <div class="flex justify-between">
    <div class="flex flex-col items-center gap-5 relative">
      <div
        class="relative w-[278px] imgHouse h-[165px] rounded-lg bg-white outline-transparent transition-all duration-500 flex justify-center items-center"
      >
        <img
          class="h-full w-full object-contain"
          src="${img}"
          alt="Окно"
        />
      </div>

      <span class="font-medium text-xl leading-[24.38px] text-center"
        >${title}</span
      >
    </div>

    <div class="w-[390px] flex-shrink-0 p-5 bg-white rounded-lg space-y-5">
      <div class="containerInputRange">
        <div
          class="flex items-center gap-5 leading-[21.94px] text-lg font-medium"
        >
          <span>Ширина фронтальная:</span>
          <p class="flex gap-2.5 items-center">
            <span class="rangeValue">${minWidthFront}</span> мм
          </p>
        </div>

        <div class="space-y-0.5">
          <input
            value="${minWidthFront}"
            min="${minWidthFront}"
            max="${maxWidthFront}"
            type="range"
            class="w-full inputRange"
            data-name="${name}"
            name="${name}WidthFront"
          />

          <div
            class="flex items-center justify-between leading-[17.07px] text-sm"
          >
            <span>${minWidthFront}</span>

            <span>${maxWidthFront}</span>
          </div>
        </div>
      </div>

      <div class="containerInputRange">
        <div
          class="flex items-center gap-5 leading-[21.94px] text-lg font-medium"
        >
          <span>Ширина боковая:</span>
          <p class="flex gap-2.5 items-center">
            <span class="rangeValue">${minWidthBack}</span> мм
          </p>
        </div>

        <div class="space-y-0.5">
          <input
            value="${minWidthBack}"
            min="${minWidthBack}"
            max="${maxWidthBack}"
            type="range"
            class="w-full inputRange"
            data-name="${name}"
            name="${name}widthBack"
          />

          <div
            class="flex items-center justify-between leading-[17.07px] text-sm"
          >
            <span>${minWidthBack}</span>

            <span>${maxWidthBack}</span>
          </div>
        </div>
      </div>

      <div class="containerInputRange">
        <div
          class="flex items-center gap-5 leading-[21.94px] text-lg font-medium"
        >
          <span>Высота:</span>
          <p class="flex gap-2.5 items-center">
            <span class="rangeValue">${minHeightWindow}</span> мм
          </p>
        </div>

        <div class="space-y-0.5">
          <input
            value="${minHeightWindow}"
            min="${minHeightWindow}"
            max="${maxHeightWindow}"
            type="range"
            class="w-full inputRange"
            data-name="${name}"
            name="${name}HeightWindow"
          />

          <div
            class="flex items-center justify-between leading-[17.07px] text-sm"
          >
            <span>${minHeightWindow}</span>

            <span>${maxHeightWindow}</span>
          </div>
        </div>
      </div>
    </div>

    <div id="${name}NotValueContainer" class="flex self-end items-center gap-4 relative NotValueContainer active">
      <div
        class="border-[#E8EBF0] border bg-white rounded-full w-[21px] h-[21px] flex justify-center items-center"
      >
        <div class="bg-primary iconChecked rounded-full w-[9px] h-[9px] transition-all opacity-0 duration-500">&nbsp;</div>
      </div>

      <label class="leading-[21.94px] font-medium text-lg" for=""
        >Я не знаю<br />размеров</label
      >

      <input id="${name}NotValue" name="${name}NotValue" checked type="checkbox" class="absolute w-full h-full opacity-0" />
    </div>
  </div>`;
  }
};
