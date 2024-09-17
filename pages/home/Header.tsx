'use client';

import Image from 'next/image';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/navigation';

interface MenuItemProps {
  title: string;
  active?: boolean;
  onClick?: () => void;
}

const menuList: {
  title: string;
  href?: string;
}[] = [
  { title: 'بيت', href: '#home' },
  { title: 'خدمات', href: '#services' },
  { title: 'أعضاء', href: '#members' },
  { title: 'اتصل بنا', href: '#contactus' },
];

const CustomMenuItem = (props: MenuItemProps) => {
  const { title, onClick } = props;
  return (
    <div
      className={`md:leading-[30px] p-[8px] cursor-pointer md:mx-0 mx-auto`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

const HeaderSection = () => {
  const router = useRouter();
  const [expanded, setExpanded] = useState<boolean>(false);

  const onShowClicked = () => setExpanded(true);
  const onCloseClicked = () => setExpanded(false);

  const onMenuClicked = (href: string) => {
    router.push(href);
    onCloseClicked();
  };

  return (
    <>
      <div className="md:block hidden">
        <div className="flex items-center">
          <Image src={'/images/logo.jpg'} width={58} height={63} alt={`Logo`} />

          <div className="flex items-center justify-center flex-grow gap-[8px]">
            {menuList.map((item, index) => (
              <CustomMenuItem
                title={item.title}
                key={index}
                onClick={() => onMenuClicked(item.href || '#')}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex items-center gap-[12px]" onClick={onShowClicked}>
          <MenuRoundedIcon className="!text-my-green" />
          <Image src={'/images/logo.jpg'} width={38} height={42} alt={`Logo`} />
        </div>

        <Menu
          anchorEl={null}
          open={expanded}
          onClose={onCloseClicked}
          sx={{
            margin: 0,
            padding: '0px',
            '& .MuiList-root': {
              padding: '0px',
            },
            '& .MuiMenu-paper': {
              top: '0px!important',
              left: '0px!important',
              maxWidth: '100%',
              background: 'transparent',
            },
          }}
        >
          <div className="w-screen">
            <div className="h-[52px] flex items-center justify-end px-[18px]">
              <IconButton onClick={onCloseClicked}>
                <CloseRoundedIcon />
              </IconButton>
            </div>
            <div className="bg-white !text-center">
              {menuList.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => onMenuClicked(item.href || '#')}
                >
                  <CustomMenuItem title={item.title} />
                </MenuItem>
              ))}
            </div>
          </div>
        </Menu>
      </div>
    </>
  );
};

export default HeaderSection;
